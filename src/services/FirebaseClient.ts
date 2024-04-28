import {initializeApp, FirebaseOptions} from "firebase/app";
import {child, get, getDatabase, ref} from "firebase/database";

export class FirebaseClient {
  private readonly dbRef;

  constructor(options: FirebaseOptions) {
    const app = initializeApp(options);
    const db = getDatabase(app);
    this.dbRef = ref(db);
  }

  async getURL(url: string) {
    const snap = await get(child(this.dbRef, url));
    return snap.val();
  }
}
