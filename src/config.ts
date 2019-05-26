import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public apiUrl = '';
}

export const firebaseConfig = {
	fire: {
		apiKey: '',
		authDomain: '',
		databaseURL: '',
		projectId: '',
		storageBucket: '',
		messagingSenderId: '',
		appId: ''
	}
};
