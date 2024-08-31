import React from "react";
import Navbar from "../../components/Navbar";
import NoteCard from "../../components/NoteCard";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <NoteCard
          title="title"
          date="date"
          content="content"
          tags={["tage"]}
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
        <NoteCard
          title="title"
          date="date"
          content="content"
          tags={["tage"]}
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
        <NoteCard
          title="title"
          date="date"
          content="content"
          tags={["tage"]}
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
      </div>
    </>
  );
};

export default Home;
