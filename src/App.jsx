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
    label: 'Tuna tostada',
  },
  {
    src: '/crudelia-2.jpg',
    alt: 'Guacamole and totopos',
    label: 'Guacamole & totopos',
  },
  {
    src: '/crudelia-3.jpg',
    alt: 'Totopo dipping into guacamole',
    label: 'Guac action shot',
  },
  {
    src: '/crudelia-4.jpg',
    alt: 'Birria taco with consommé',
    label: 'Birria taco',
  },
  {
    src: '/crudelia-5.jpg',
    alt: 'Salsa trio with totopos',
    label: 'Salsa trio',
  },
  {
    src: '/crudelia-6.jpg',
    alt: 'Vegan doggo',
    label: 'Vegan doggo',
  },
];

function Header() {
  return (
    <header className="nav">
      <a className="brand" href="/">
        Crudelia
        <span>Mexican Street Food</span>
      </a>

      <nav className="navLinks" aria-label="Main navigation">
        <a href="/menu">Menu</a>
        <a href="/pop-ups">Pop-ups</a>
        <a href="/catering">Catering</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
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
  );
}

function Layout({ children }) {
  return (
    <main className="site">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
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
          <a href="/menu">View menu</a>
          <a className="ghost" href="/catering">
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
  );
}

function AboutBlock() {
  return (
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
  );
}

function MenuGrid({ preview = false }) {
  const groups = preview ? menuGroups.slice(0, 2) : menuGroups;

  return (
    <div className="menuGrid">
      {groups.map((group) => (
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
  );
}

function GalleryGrid({ preview = false }) {
  const images = preview ? gallery.slice(0, 3) : gallery;

  return (
    <div className="galleryGrid">
      {images.map((image) => (
        <figure className="galleryItem" key={image.src}>
          <img src={image.src} alt={image.alt} />
          <figcaption>{image.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <Hero />
      <AboutBlock />

      <section className="menuSection">
        <p className="eyebrow">Menu preview</p>
        <h2>Tacos, antojitos & cruda food</h2>
        <MenuGrid preview />
        <div className="sectionCta">
          <a className="cta" href="/menu">
            See full menu
          </a>
        </div>
      </section>

      <section className="popupSection">
        <div>
          <p className="eyebrow">Find us next</p>
          <h2>Currently cooking in London</h2>
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

      <section className="gallerySection">
        <p className="eyebrow">Gallery preview</p>
        <h2>From the kitchen pass</h2>
        <GalleryGrid preview />
        <div className="sectionCta">
          <a className="cta" href="/gallery">
            See gallery
          </a>
        </div>
      </section>
    </Layout>
  );
}

function MenuPage() {
  return (
    <Layout>
      <section className="pageHero">
        <p className="eyebrow">Menu</p>
        <h1>Tacos, antojitos & plates for la cruda.</h1>
        <p>
          A punchy little menu built around corn, salsa, slow braises, fresh
          toppings and proper cravings.
        </p>
      </section>

      <section className="menuSection pageSection">
        <MenuGrid />
      </section>
    </Layout>
  );
}

function PopUpsPage() {
  return (
    <Layout>
      <section className="pageHero">
        <p className="eyebrow">Pop-ups</p>
        <h1>Find Crudelia in London.</h1>
        <p>
          Pub kitchen takeovers, match-day food, late-night service and special
          events across the city.
        </p>
      </section>

      <section className="popupSection standalone">
        <div>
          <p className="eyebrow">Current residency</p>
          <h2>King & Co, Clapham</h2>
          <p>
            We’re serving tacos, tostadas, doggos, salsa and proper plates for
            la cruda from the kitchen at King & Co.
          </p>
        </div>

        <aside className="dateCard">
          <span>22 June – 19 July</span>
          <strong>Open till late</strong>
          <small>Service subject to match days</small>
        </aside>
      </section>
    </Layout>
  );
}

function CateringPage() {
  return (
    <Layout>
      <section className="pageHero">
        <p className="eyebrow">Catering</p>
        <h1>Bring Crudelia to your party.</h1>
        <p>
          Private events, birthdays, supper clubs, brand events, weddings,
          kitchen takeovers and anything that needs tacos, salsa and attitude.
        </p>
      </section>

      <section className="cateringSection pageSection">
        <div className="featureGrid">
          <div>Private catering</div>
          <div>Supper clubs</div>
          <div>Events & pop-ups</div>
          <div>Kitchen takeovers</div>
        </div>

        <p>
          We can build a compact taco menu, a full street-food spread, a salsa
          table, a late-night cruda menu or a custom package around your event.
        </p>

        <a className="cta" href="mailto:hello@crudelia.mx">
          Enquire now
        </a>
      </section>
    </Layout>
  );
}

function GalleryPage() {
  return (
    <Layout>
      <section className="pageHero">
        <p className="eyebrow">Gallery</p>
        <h1>From the kitchen pass.</h1>
        <p>
          Tuna tostadas, guacamole, salsa trio, birria, doggos and whatever
          else makes it out before getting eaten.
        </p>
      </section>

      <section className="gallerySection pageSection">
        <GalleryGrid />
      </section>
    </Layout>
  );
}
function App() {
  const path = window.location.pathname;

  if (path === '/menu') return <MenuPage />;
  if (path === '/pop-ups') return <PopUpsPage />;
  if (path === '/catering') return <CateringPage />;
  if (path === '/gallery') return <GalleryPage />;
  if (path === '/contact') return <ContactPage />;

  return <HomePage />;
}

export default App;
