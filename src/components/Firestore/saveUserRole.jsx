// saveUserRole.js
import { db } from '../firebase';

export const saveUserRole = async (user, role = 'user') => {
  if (user) {
    await db.collection('Users').doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      role,
    });
  }
};
