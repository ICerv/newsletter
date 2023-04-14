console.log('funguju!');
/********************ZADANI 1.********************/

// Založte si HTML stránku s JavaScriptem, třeba následujícím příkazem:

// npm init kodim-app cviceni-newsletter-form html-css-js
// Vložte do ní formulář s textovým políčkem a tlačítkem pro přihlášení k odběru.

// Vytvořte posluchač pro událost submit. Jakmile uživatel zadá svůj e-mail a potvrdí přihlášení, zobrazte na stránce místo formuláře zprávu o úspěšném přihlášení k odběru.

// Texty můžete vymyslet vlastní nebo využít následující:

// Jednou za týden posíláme newsletter ze světa frontendu a UX.
// Zadejte svůj e-mail a zůstaňte v obraze.
// Odebírat
// Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese adresa@domena.cz.
// Pokud máte čas a chuť, nastylujte stránku dle svého citu. Obrázek výše může posloužit jako inspirace.

const formular = document.querySelector('form')
const inputElm = document.querySelector('input');

const newsletter = (event) => {
  event.preventDefault();
  const input = document.querySelector('input');
  const userEmail = input.value;
  formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${userEmail}.`
}


/********************ZADANI 2.********************/
/*
Pokračujte v příkladu Newsletter z lekce. V tomto cvičení zařidíme, aby uživatel při zadávání e-mailu dostal zpětnou vazbu, pokud zadává neplatný vstup.

V CSS si vytvořte třídu, která dělá výrazný červený rámeček kolem textového políčka.
Přidejte na textové políčko posluchač události input.
Během toho, jak uživatel píše, kontrolujte, jestli náhodou políčko není prázdné. V takovém případě na políčko přidejte třídu s červeným rámečkem. Pokud je vstup v pořádku, rámeček odeberte.
Zobrazte červený rámeček i v případě, že zadaný e-mail neobsahuje zavináč. K tomu můžete použít metodu indexOf nebo includes.
*/

const checkInput = (event) => {
  if (inputElm.value === '' || inputElm.value.includes('@')) {
    inputElm.classList.add('alert');
  } else {
    inputElm.classList.remove('alert')
  }
}

formular.addEventListener('submit', newsletter);
inputElm.addEventListener('input', checkInput)
