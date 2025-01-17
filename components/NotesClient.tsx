"use client";

import { addNote, deleteNote, getAllNotes, updateNote } from "@/lib/actions";
import { Note } from "@/type";
import { useState } from "react";
interface NotesClientProps {
  initialNotes: Note[]; // Expecting an array of Note objects
}

const NotesClient: React.FC<NotesClientProps> = ({ initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes || []);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editId, setEditId] = useState(null);

  // Add or Update Note
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateNote(editId, title, desc);
      } else {
        await addNote(title, desc);
      }
      setTitle("");
      setDesc("");
      setEditId(null);

      // Fetch updated notes
      const updatedNotes = await getAllNotes();
      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error adding/updating note:", error);
    }
  };

  // Delete Note
  const handleDelete = async (id: string) => {
    try {
      await deleteNote(id);
      const updatedNotes = await getAllNotes();
      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit Note
  const handleEdit = (note) => {
    setEditId(note._id);
    setTitle(note.title);
    setDesc(note.desc);
  };

  return (
    <div className="">
      {/* Form for Adding/Updating Notes */}
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full mb-2 p-2 border rounded bg-transparent"
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="block w-full mb-2 p-2 border rounded bg-transparent"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {editId ? "Update Note" : "Add Note"}
        </button>
      </form>

      {/* Display Notes */}
      <div>
        {Array.isArray(notes) &&
          notes.map((note) => (
            <div
              key={note._id}
              className="border p-3 rounded mb-3 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{note.title}</h3>
                <p>{note.desc}</p>
                <small>{new Date(note.date).toLocaleString()}</small>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(note)}
                  className="bg-yellow-500 text-white py-1 px-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note._id)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NotesClient;
