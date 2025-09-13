import { COLLECTIONS } from "@/firebase/collections";
import { auth, db } from "@/firebase/config";
import { User } from "@/types/models";
import { createUserWithEmailAndPassword, signOut, UserCredential } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

class AuthService {
    static async signUp(email: string, password: string, firstName: string, lastName: string): Promise<User> {
       try {
        const userCred: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        const userData: User = {
            id: userCred.user.uid,
            email,
            firstName,
            lastName,
            role: "customer",
            createdAt: new Date().toISOString(),
        }
 
        await setDoc(doc(db, COLLECTIONS.USERS, userData.id), userData);
 
        return userData;
       } catch (error) {
        throw error;
       }
    }

    // static async signIn(email: string, password: string): Promise<User> {}

    static async signOut(): Promise<void> {
        try {
            await signOut(auth);
        } catch (error) {
            throw error;
        }
    }
}