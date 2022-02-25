import { MongoClient, ObjectId } from "mongodb";

import Head from "next/head";

import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailPage(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails
        img={props.meetupData.image}
        address={props.meetupData.address}
        title={props.meetupData.title}
        description={props.meetupData.description}
      />
    </>
  );
}

// only export this fn with getStaticProps
export async function getStaticPaths() {
  // db connection
  const client = await MongoClient.connect(
    "mongodb+srv://sam:Zxcvbnm-321@nextjs-practice.wbu0y.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  // return {
  //   // this paths array can be generated dynamically
  //   paths: [
  //     {
  //       params: {
  //         meetupId: "m1",
  //       },
  //     },
  //     {
  //       params: {
  //         meetupId: "m2",
  //       },
  //     },
  //   ],
  //   fallback: false,
  // };

  return {
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // here property would be url identifier (file naem in sq brackets and value would be url param value)
  const meetupId = context.params.meetupId;

  // console.log(context.params);

  // db connection
  const client = await MongoClient.connect(
    "mongodb+srv://sam:Zxcvbnm-321@nextjs-practice.wbu0y.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  console.log(selectedMeetup);

  const meetupData = {
    id: selectedMeetup._id.toString(),
    title: selectedMeetup.title,
    address: selectedMeetup.address,
    image: selectedMeetup.image,
    description: selectedMeetup.description,
  };

  console.log(meetupData);

  client.close();

  return {
    props: {
      meetupData,
    },
  };
}

export default MeetupDetailPage;

// {
//   id: "m1",
//   title: "A First Meetup",
//   image:
//     "https://upload.wikimedia.org/wikipedia/commons/2/22/Hagia_Sophia_Mars_2013.jpg",
//   address: "Sultan Ahmet, Ayasofya Meydan No:1, 34122 Fatih/İstanbul, Turkey",
//   description:
//     "Hagia Sophia, officially known as the Holy Hagia Sophia Grand Mosque, and formerly the Church of Hagia Sophia is a Late Antique place of worship in Istanbul, designed by the Greek geometers Isidore of Miletus and Anthemius of Tralles",
// }
