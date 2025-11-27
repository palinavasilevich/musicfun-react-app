import { PageTitle, TrackDetails, TrackList } from "./components";
import { useTrackSelection } from "./hooks/useTrackSelection";

// import { Header } from "./components/Header/Header";
// import { Footer } from "./components/Footer/Footer";
// import { SidebarMenu } from "./components/SidebarMenu/SidebarMenu";

export function MainPage() {
  const { selectedTrackId, setSelectedTrackId } = useTrackSelection();

  const handleTrackSelect = (trackId: string | null) => {
    setSelectedTrackId(trackId);
  };

  return (
    <div>
      {/* <Header />
        <SidebarMenu /> */}

      <main className="main">
        <PageTitle title="Musicfun player" />
        <section className="container">
          <TrackList
            selectedTrackId={selectedTrackId}
            onTrackSelect={handleTrackSelect}
          />
          <TrackDetails selectedTrackId={selectedTrackId} />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
