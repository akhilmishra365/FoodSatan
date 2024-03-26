import React, { useState } from 'react';
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged , signOut} from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);

const signout = async () => {
    await signOut(auth);
}
export default signout;