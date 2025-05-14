import Link from "next/link";

export default function Home() {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Mon cahier journal
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Simplifiez vos préparations en quelques clics avec notre cahier
            journal numérique !
          </p>

          <ul className="py-10 text-gray-500">
            <li className="pb-8">📅 Emploi du temps intégré,</li>
            <li className="pb-8">🖊️ Séquences éditables en un clic,</li>
            <li className="">📄 Journée exportable en PDF</li>
          </ul>

          <div className="mt-4 md:mt-8">
            <Link href="/signup" className="btn btn-primary">
              Essayez-le maintenant 🚀
            </Link>
          </div>
        </div>
      </div>

      <img
        alt=""
        src="/Illustration.png"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
}
