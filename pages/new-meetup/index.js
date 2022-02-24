import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage(props) {
  const router = useRouter();

  async function addMeetupHandler(meetupData) {
    // console.log(meetupData);

    // send data to monogodb atlas
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.replace("/");
  }

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups using the form"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
export default NewMeetupPage;
