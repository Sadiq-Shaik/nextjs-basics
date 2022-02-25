// import { useEffect, useState } from "react";

import { MongoClient } from "mongodb";

import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Hagia_Sophia_Mars_2013.jpg",
    address: "Sultan Ahmet, Ayasofya Meydan No:1, 34122 Fatih/İstanbul, Turkey",
    description:
      "Hagia Sophia, officially known as the Holy Hagia Sophia Grand Mosque, and formerly the Church of Hagia Sophia is a Late Antique place of worship in Istanbul, designed by the Greek geometers Isidore of Miletus and Anthemius of Tralles",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mezquita_de_C%C3%B3rdoba_desde_el_aire_%28C%C3%B3rdoba%2C_Espa%C3%B1a%29.jpg",
    address: "C. Cardenal Herrero, 1, 14003 Córdoba, Spain",
    description:
      "The Mosque–Cathedral of Córdoba, officially known by its ecclesiastical name, the Cathedral of Our Lady of the Assumption, is the cathedral of the Roman Catholic Diocese of Córdoba dedicated to the Assumption of Mary and located in the Spanish region of Andalusia",
  },
];

function HomePage(props) {
  //   no need to do this
  //   const [loadedMeetups, setMeetups] = useState([]);

  //   useEffect(() => {
  //     //send hhtp to receive meetup list
  //     setMeetups(DUMMY_MEETUPS);
  //   }, []);

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Best meetups app in the world" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// SSG;
// static data fetching for static site generation.
// getStaticProps() and props property in return object are mandatory names.
// we can access database or file system too here, the code inside this is NEITHER RUN ON SERVER NOR ON CLIENT** but during build process.
export async function getStaticProps() {
  // fetch data from an API
  // this fetch is provided by nextjs since it is available on server side
  // const meetups = fetch("/api/meetups");

  const client = await MongoClient.connect(
    "mongodb+srv://sam:Zxcvbnm-321@nextjs-practice.wbu0y.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    // this props property is set to props on page component (Homepage(props)).
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // re pre-generate page after x seconds (i.e dont have redeploy for changes to be pre-generated)
    revalidate: 1, //seconds
  };
}

// // SSR
// export async function getServerSideProps(context) {
//   // request from client
//   const req = context.req;
//   const res = context.res;

//   // fetch data from api

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
