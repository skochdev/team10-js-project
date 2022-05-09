// функція повертає розмітку , яка на разі використовується в Library коли там пусто.
import nothing_here_image from '../images/nothing-here-yet.png';

const markup_for_illustration = `
 <div class="nothing-here container">
    <p class="nothing-here__text">There's nothing  here yet...</p>
    <img class="nothing-here__image" src=${nothing_here_image} alt="illustration by Guntur Saladin" width="800" >
    <span class="nothing-here__artBy">art by <a class="nothing-here__author-link" href="https://dribbble.com/shots/7889509-Nothing-Here-Yet/attachments/491781?mode=media" rel="noreferrer noopener" target="_blank"  aria-label="link to the author of the illustration">Guntur Saladin</a></span>
   </div>
`;

export default function nothing_here() {
  return markup_for_illustration;
}
