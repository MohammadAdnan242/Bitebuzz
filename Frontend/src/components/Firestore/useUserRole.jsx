import { useEffect, useState } from 'react';
import { auth, db } from '../firebase'; // Update the path if needed
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const useUserRole = () => {
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, "Users", user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        setRole(userDoc.data().role || 'user'); // default to 'user' if role is undefined
                    } else {
                        console.log("User document does not exist");
                    }
                } catch (error) {
                    console.error("Error fetching user role:", error);
                }
            } else {
                setRole(null); // User is not logged in
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { role, loading };
};

export default useUserRole;
