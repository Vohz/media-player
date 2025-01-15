// app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Play, Info } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-zinc-900/95 sticky top-0 z-50 border-b border-zinc-800">
        <div className="container mx-auto flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            AnimeStream
          </Link>
          <div className="flex items-center gap-4">
            <Input 
              className="w-64 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400" 
              placeholder="Rechercher un anime..." 
            />
            <Button variant="ghost" className="text-zinc-300 hover:text-white hover:bg-zinc-800">
              Connexion
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Sinscrire
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] mb-12">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-16 left-8 container mx-auto z-20">
          <h2 className="text-5xl font-bold mb-4 text-white max-w-2xl">
            Découvrez les meilleures séries anime
          </h2>
          <p className="text-xl mb-6 text-zinc-300 max-w-xl">
            Regardez en exclusivité les derniers épisodes de vos séries préférées
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <Play className="mr-2 h-5 w-5" /> Regarder
            </Button>
            <Button size="lg" variant="outline" className="text-white border-zinc-600 hover:bg-zinc-800">
              <Info className="mr-2 h-5 w-5" /> Plus dinfos
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Anime Grid */}
      <section className="container mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-white">Tendances</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-zinc-900 border-zinc-800 hover:border-blue-500 transition-colors">
              <CardContent className="p-0">
                <div className="h-48 bg-zinc-800 rounded-t-lg" />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-white">Titre de lanime {i}</CardTitle>
                <CardDescription className="text-zinc-400">Genre • Année</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/anime/${i}`} className="w-full">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    <Play className="mr-2 h-4 w-4" /> Voir les épisodes
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-white">Catégories</h3>
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex gap-2">
            {['Action', 'Aventure', 'Comédie', 'Drame', 'Fantasy', 'Romance', 'Sci-Fi', 'Slice of Life'].map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                className="rounded-full border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-blue-500"
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </section>

      {/* Continue Watching */}
      <section className="container mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-white">Continuer à regarder</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-zinc-900 border-zinc-800 hover:border-blue-500 transition-colors">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-48 bg-zinc-800 rounded-t-lg" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-700">
                    <div className="h-full bg-blue-500 w-3/4" />
                  </div>
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-white">Titre de lanime {i}</CardTitle>
                <CardDescription className="text-zinc-400">Épisode 12 • 24:13 restantes</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/anime/${i}?episode=12`} className="w-full">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    <Play className="mr-2 h-4 w-4" /> Reprendre
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}