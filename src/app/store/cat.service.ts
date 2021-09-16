import { Injectable } from "@angular/core";
import { Cat, CatStore } from "./cat.store";

@Injectable({ providedIn: 'root' })
export class CatService {
  id: number = 1;
  private cats: Array<Cat> = [
    { id: 1, image: 'http://html.ftpes.ru/FrontEndTest/Shironeko.jpg', name: 'Shironeko', description: 'Самый счастливый и сонный кот в мире', liked: false },
    { id: 2, image: 'http://html.ftpes.ru/FrontEndTest/Garfi.jpg', name: 'Garfi', description: 'Самый злой кот в мире', liked: false },
    { id: 3, image: 'http://html.ftpes.ru/FrontEndTest/Sam.jpg', name: 'Sam', description: 'У кота Сэма есть потрясающие брови', liked: false },
    { id: 4, image: 'http://html.ftpes.ru/FrontEndTest/Snoopy.jpg', name: 'Snoopy', description: 'Самый очаровательный котик', liked: false },
    { id: 5, image: 'http://html.ftpes.ru/FrontEndTest/Venus.jpg', name: 'Venus', description: 'Кошка с двумя лицами', liked: false },
    { id: 6, image: 'http://html.ftpes.ru/FrontEndTest/Maru.jpg', name: 'Maru', description: 'Повелитель коробок', liked: false },
    { id: 7, image: 'http://html.ftpes.ru/FrontEndTest/Lil_Bub.jpg', name: 'Lil Bub', description: 'Вечный котёнок', liked: false },
    { id: 8, image: 'http://html.ftpes.ru/FrontEndTest/Banye.jpg', name: 'Banye', description: 'Всегда удивлённый кот', liked: false },
    { id: 9, image: 'http://html.ftpes.ru/FrontEndTest/Grumpy_Cat.jpg', name: 'Grumpy Cat', description: 'Сердитый котик', liked: false },
    { id: 10, image: 'http://html.ftpes.ru/FrontEndTest/Hamilton.jpg', name: 'Hamilton', description: 'Кот-хипстер', liked: false },
    { id: 11, image: 'http://html.ftpes.ru/FrontEndTest/Nala.jpg', name: 'Nala', description: 'Кошка, которая всегда в шоке', liked: false },
    { id: 12, image: 'http://html.ftpes.ru/FrontEndTest/Colonel_Meow.jpg', name: 'Colonel Meow', description: 'Кот с самой длинной шерстью', liked: false },
  ];
  constructor(private catStore: CatStore) {
    this.cats.forEach(cat => {
      this.catStore.add(cat);
      this.id++;
    })
  };

  add(cat: Cat) {
    this.catStore.add({ ...cat, id: this.id, liked: false });
    this.id++;
  }

  edit(cat: Cat) {
    this.catStore.update(cat.id.toString(), { ...cat })
  }
}