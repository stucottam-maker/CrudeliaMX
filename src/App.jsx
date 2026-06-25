import './styles.css';

const menuGroups = [
  {
    title: 'Antojitos',
    items: [
      {
        name: 'Guacamole & Totopos',
        desc: 'Smashed avocado, lime, jalapeño, coriander and crisp totopos.',
        price: '£6.50',
      },
      {
        name: 'Esquites',
        desc: 'Charred sweetcorn, chipotle mayo, parmesan, lime and salsa macha.',
        price: '£6',
      },
      {
        name: 'Tacos Dorados de Papa',
        desc: 'Crispy rolled potato tacos, salsa verde, lettuce, sour cream and feta.',
        price: '£8',
      },
      {
        name: 'Tuna Cevichelada Tostada',
        desc: 'Yellowfin tuna, michelada dressing, avocado, cucumber and red onion.',
        price: '£13',
      },
    ],
  },
  {
    title: 'Tacos',
    items: [
      {
        name: 'Quesabirria',
        desc: 'Guajillo and ancho braised beef, cheese crust and consommé.',
        price: '£12',
      },
      {
        name: 'Cochinita Pibil',
        desc: 'Achiote and citrus pulled pork, pickled onion and habanero salsa.',
        price: '£9',
      },
      {
        name: 'Hongos Adobados',
        desc: 'Oyster mushrooms in pasilla adobo, crispy leeks and salsa macha.',
        price: '£9',
      },
    ],
  },
  {
    title: 'Para La Cruda',
    items: [
      {
        name: 'Doggo Norteño',
        desc: 'Bacon-wrapped beef frankfurter, refried beans, jalapeño relish, chipotle mayo, pico de gallo and pickled onions.',
        price: '£12',
      },
      {
        name: 'Doggo Vegano',
        desc: 'Plant-based frankfurter, refried beans, jalapeño relish, vegan chipotle mayo, pico de gallo and pickled onions.',
        price: '£12',
      },
      {
        name: 'Birria Loaded Fries',
        desc: 'Fries with beef birria, consommé, cheese, salsa verde, sour cream, guacamole and pickled onion.',
        price: '£12',
      },
    ],
  },
  {
    title: 'Botanas',
    items: [
      {
        name: 'Extra Totopos',
        desc: 'Crisp tortilla chips for dipping, scooping and sharing.',
        price: '£3',
      },
      {
        name: 'Fries',
        desc: 'Crispy seasoned fries.',
        price: '£4.50',
      },
      {
        name: 'Salsa Trio',
        desc: 'Salsa verde, habanero and macha.',
        price: '£4',
      },
    ],
  },
];

const gallery = [
  {
    src: '/crudelia-1.jpg',
    alt: 'Tuna tostada',
  },
  {
    src: '/crudelia-2.jpg',
    alt: 'Guacamole and totopos',
  },
  {
    src: '/crudelia-3.jpg',
    alt: 'Totopo dipping into guacamole',
  },
  {
    src: '/crudelia-4.jpg',
    alt: 'Birria taco with consommé',
  },
  {
    src: '/crudelia-5.jpg',
    alt: 'Salsa trio with totopos',
  },
  {
    src: '/crudelia-6.jpg',
    alt: 'Vegan doggo',
  },
];

function App() {
  return (
    <main className="site">
      <header className="nav">
        <a className="brand" href="#home">
          Crudelia
          <span>Mexican Street Food</span>
        </a>

        <nav className="navLinks" aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#popup">Pop-ups</a>
          <a href="#catering">Catering</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Mexican kitchen · London pop-ups · Private events</p>
          <h1>Crudelia</h1>
          <h2>Tacos, tostadas & plates for la cruda.</h2>
          <p>
            Bold Mexican street food from a little kitchen with a lot of attitude —
            serving tuna tostadas, birria, guacamole, salsas and late-night
            cravings across London.
          </p>

          <div className="heroButtons">
            <a href="#menu">View menu</a>
            <a className="ghost" href="#catering">
              Book catering
            </a>
          </div>
        </div>

        <div className="heroImage">
          <img src="/crudelia-hero.jpg" alt="Crudelia tuna tostada" />
          <div className="openBadge">
            <strong>Open till late</strong>
            <span>Service subject to match days</span>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="ladyMark">
          <img src="/crudelia-lady.png" alt="Crudelia lady logo" />
        </div>

        <div>
          <p className="eyebrow">About Crudelia</p>
          <h2>A little Mexican kitchen with a lot of attitude.</h2>
          <p>
            Crudelia is built around bold salsas, slow braises, corn tortillas,
            late nights and good people. From pub kitchen takeovers to private
            parties, the food is colourful, punchy and made for sharing.
          </p>
        </div>
      </section>

      <section id="menu" className="menuSection">
        <p className="eyebrow">Menu</p>
        <h2>Tacos, antojitos & cruda food</h2>

        <div className="menuGrid">
          {menuGroups.map((group) => (
            <article className="menuCard" key={group.title}>
              <h3>{group.title}</h3>

              {group.items.map((item) => (
                <div className="menuItem" key={item.name}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <span>{item.price}</span>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section id="popup" className="popupSection">
        <div>
          <p className="eyebrow">Find us next</p>
          <h2>Currently cooking in Clapham Common</h2>
          <p>
            Kitchen takeovers, pub pop-ups, match-day food, private events and
            late-night taco situations.
          </p>
        </div>

        <aside className="dateCard">
          <span>King & Co, Clapham</span>
          <strong>22 June – 19 July</strong>
          <small>Open till late</small>
        </aside>
      </section>

      <section id="catering" className="cateringSection">
        <p className="eyebrow">Private events</p>
        <h2>Bring Crudelia to your party.</h2>
        <p>
          Available for birthdays, supper clubs, brand events, weddings, kitchen
          takeovers and anything that needs tacos, salsa and attitude.
        </p>

        <div className="featureGrid">
          <div>Private catering</div>
          <div>Supper clubs</div>
          <div>Events & pop-ups</div>
          <div>Kitchen takeovers</div>
        </div>

        <a className="cta" href="mailto:hello@crudelia.mx">
          Enquire now
        </a>
      </section>

      <section id="gallery" className="gallerySection">
        <p className="eyebrow">Gallery</p>
        <h2>From the kitchen pass</h2>

        <div className="galleryGrid">
          {gallery.map((image) => (
            <img src={image.src} alt={image.alt} key={image.src} />
          ))}
        </div>
      </section>

      <footer id="contact" className="footer">
        <div>
          <h2>Crudelia</h2>
          <p>Mexican street food · Pop-ups · Supper clubs · Private catering</p>
        </div>

        <div>
          <p>Bookings & catering</p>
          <a href="mailto:hello@crudelia.mx">hello@crudelia.mx</a>
          <br />
          <a
            href="https://www.instagram.com/crudelia.mx/"
            target="_blank"
            rel="noreferrer"
          >
            @crudelia.mx
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
