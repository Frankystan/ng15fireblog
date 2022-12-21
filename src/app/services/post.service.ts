import { Injectable } from "@angular/core";
import {
	addDoc,
	collection,
	collectionData,
	deleteDoc,
	doc,
	docData,
	Firestore,
	limit,
	orderBy,
	Query,
	query,
	updateDoc,
} from "@angular/fire/firestore";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { IPost } from "@app/models/post.interface";
import { Observable } from "rxjs";
import { NotificationService } from "./notification.service";

/*
https://betterprogramming.pub/angular-13-firebase-crud-tutorial-with-angularfire-7-2d6980dcc091

https://dev.to/jdgamble555/angular-12-with-firebase-9-49a0
https://youtu.be/cUNmtRNc-8s
https://youtu.be/CC0GuG2uVwQ
https://firebase.google.com/docs/firestore/query-data/listen?hl=es-419
https://www.codegrepper.com/code-examples/javascript/firestore+v9+addDoc+and+setDoc+collection%28%29+doc%28%29


VER CÓMO RECUPERA/OBTIENE LOS TWEETS DEL USUARIO LOGEADO ASI COMO LOS EVENTOS ADD, UPDATE..ETC
https://youtu.be/DKe3oAt2_KE?t=1737
MATERAIL CHIPS
https://www.positronx.io/angular-material-reactive-forms-validation-tutorial/
*/

@Injectable({
	providedIn: "root",
})
export class PostService {

	constructor(private readonly db: Firestore,private _ntf: NotificationService) {}

    get form(): FormGroup {

        const regex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

        return new FormGroup({
            id: new FormControl(""),
            title: new FormControl("", [Validators.required]),
            content: new FormControl("", Validators.required),
            featured_image: new FormControl("", Validators.pattern(regex)),
            tags: new FormArray([])
        });

    }

	list(): Observable<IPost[]> {

        const colRef = collection(this.db, "posts");

		let q: Query<IPost> = query<IPost>(
			colRef,
			// where('published', '==', true)
			orderBy("created_at", "desc"),
			limit(20)
		);

		return collectionData(q, { idField: "id" });
	}

	async create(data: IPost): Promise<any> {
		const colRef = collection(this.db, "posts");

        try {
            await addDoc(colRef, data);
            this._ntf.open("toast.post.created", "toast.close");
        } catch (error) {
            this.errorHandler(error);
        }
	}

	read(id: string): Observable<IPost> {
		const docRef = doc(this.db, `posts/${id}`);
		return docData(docRef, { idField: "id" });
	}

	async update(data: IPost) {
		const docRef = doc(this.db, `posts/${data.id}`);

        try {
            await updateDoc(docRef, { ...data });
            this._ntf.open("toast.post.updated", "toast.close");
        } catch (error) {
            this.errorHandler(error);
        }
	}

	async delete(id: string) {
		const docRef = doc(this.db, `posts/${id}`);

        try {
            await deleteDoc(docRef);
            this._ntf.open("toast.post.deleted", "toast.close");
        } catch (error) {
            this.errorHandler(error);
        }
	}

    private errorHandler(error: any) {
        console.log("error: ", error);
        this._ntf.open("toast.firebase." + error.message, "toast.close");
        // return observableEmpty();
    }
}
