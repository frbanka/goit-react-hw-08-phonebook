import css from './Home.module';
export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <div>
          <p>My</p>
          <p>Secret</p>
          <p>Phonebook</p>
        </div>
      </h1>
    </div>
  );
}
