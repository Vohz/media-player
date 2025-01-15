// app/anime/[id]/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

export default async function AnimePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero de l'anime */}
      <section className="relative h-[50vh] mb-12">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-16 left-8 container mx-auto z-20">
          <div className="flex gap-4 items-center mb-4">
            <span className="text-blue-500">Action</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-400">24 épisodes</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-400">2024</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-white max-w-2xl">
            Titre de lanime {id}
          </h1>
          <p className="text-xl mb-6 text-zinc-300 max-w-xl">
            Description détaillée de lanime et de son histoire. Vous pouvez
            retrouver ici un résumé captivant de la série.
          </p>
          <Link href={`/anime/${id}/watch/1`}>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Play className="mr-2 h-5 w-5" /> Commencer lépisode 1
            </Button>
          </Link>
        </div>
      </section>

      {/* Liste des épisodes */}
      <section className="container mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Épisodes</h2>
        <div className="grid gap-4">
          {Array.from({ length: 12 }, (_, i) => (
            <Card
              key={i}
              className="bg-zinc-900 border-zinc-800 hover:border-blue-500 transition-colors"
            >
              <CardContent className="p-4 flex items-center gap-4">
                <div className="relative w-40 h-24 bg-zinc-800 rounded flex-shrink-0">
                  {/* Thumbnail de l'épisode */}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Épisode {i + 1}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-2">
                    24min • Date de sortie: 15 Jan 2024
                  </p>
                  <p className="text-zinc-300 line-clamp-2">
                    Description de lépisode. Un bref résumé de ce qui se passe
                    dans cet épisode sans trop en révéler.
                  </p>
                </div>
                <Link href={`/anime/${id}/episode/${i + 1}`}>
                  <Button className="bg-blue-500 hover:bg-blue-600 h-12 px-6">
                    <Play className="h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
