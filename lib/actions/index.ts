"use server";
import Note from "../models/note.model";
import User from "../models/user.model";
import { connectToDB } from "../mongodb";
import { signOut } from "@/auth";

export async function getAllNotes() {
  try {
    await connectToDB();

    const notes = await Note.find().sort({ updatedAt: -1 }).lean(); // use lean to return plain object
    // Ensure it is an array before processing
    if (!Array.isArray(notes)) {
      throw new Error("Expected an array, but got something else");
    }

    return notes.map((note) => ({
      ...note,
      _id: note._id.toString(), // Convert ObjectId to string
      createdAt: note.createdAt.toISOString(), // Convert Date to string
      updatedAt: note.updatedAt.toISOString(), // Convert Date to string
    }));
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
}

export async function addNote(title: string, desc: string) {
  await connectToDB();
  const newNote = await Note.create({ title, desc });
  return {
    ...newNote.toObject(), // Convert to plain object
    _id: newNote._id.toString(), // Convert ObjectId to string
    createdAt: newNote.createdAt.toISOString(), // Convert Date to string
    updatedAt: newNote.updatedAt.toISOString(), // Convert Date to string
  };
}

export async function updateNote(id: string, title: string, desc: string) {
  await connectToDB();

  const updatedNote = await Note.findByIdAndUpdate(
    id,
    { title, desc, time: Date.now() },
    { new: true } // Return the updated document
  );

  // Convert to plain object if the result is not null
  if (updatedNote) {
    return {
      ...updatedNote.toObject(), // Convert Mongoose document to plain object
      _id: updatedNote._id.toString(), // Convert _id to string for serialization
      createdAt: updatedNote.createdAt?.toISOString(), // Serialize date fields
      updatedAt: updatedNote.updatedAt?.toISOString(),
    };
  }

  return null; // Return null if the note wasn't found or updated
}

export async function deleteNote(id: string) {
  await connectToDB();
  await Note.findByIdAndDelete(id);
}

export async function findUserAccess(email) {
  try {
    await connectToDB();

    const user = await User.findOne({ email }); // Find user by email
    if (user) {
      return user.hasAccess || false; // Return hasAccess or false if not defined
    }

    return false; // If user doesn't exist, assume no access
  } catch (error) {
    console.error("Error finding user access:", error);
    return false; // Handle errors gracefully
  }
}

export async function handleLogout() {
  console.log("signout");
  await signOut();
}
