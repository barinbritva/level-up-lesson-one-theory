// direction.ts
export enum Direction {
    Back = 'back',
    Forward = 'forward'
}

export function switchSlide(direction: Direction): void {
    if (direction === Direction.Back) {
      console.log('Show previous slide.');
    } else {
      console.log('Show next slide.');
    }
}
  
  // slider.js
  switchSlide(Direction.Back);
  switchSlide('forward');
  switchSlide('left');


// Рассказать про соответсвие enum в СУБД
enum Role {
    Admin = 'admin',
    Moderator = 'moderator',
    User = 'user'
}

enum Category {
    Smartphone = 1,
    Tablet,
    Pc,
    Reader
}
