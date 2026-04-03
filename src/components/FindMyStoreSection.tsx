import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Search, MapPin } from "lucide-react";
import bgGradient from "@/assets/store-bg-gradient.svg";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface FindMyStoreSectionProps {
  locale?: 'en' | 'hi';
}

interface Store {
  id: number;
  name: string;
  area: string;
  lat: number;
  lng: number;
  distance: number;
}

interface UserLocation {
  lat: number;
  lng: number;
}

const translations = {
  en: {
    title1: "Find",
    title2: "my Store",
    subtitle: "Locate the nearest Smart Value store instantly.",
    placeholder: "Enter a Location",
    viewOnMap: "View On Map",
    store: "Store",
    km: "km"
  },
  hi: {
    title1: "खोजें",
    title2: "मेरा स्टोर",
    subtitle: "निकटतम स्मार्ट वैल्यू स्टोर तुरंत खोजें।",
    placeholder: "स्थान दर्ज करें",
    viewOnMap: "मानचित्र पर देखें",
    store: "स्टोर",
    km: "किमी"
  }
};

const storesByCity: Record<string, Omit<Store, 'distance'>[]> = {
  delhi: [
    { id: 1, name: "Store 1", area: "Connaught Place, Delhi", lat: 28.6315, lng: 77.2167 },
    { id: 2, name: "Store 2", area: "Saket, Delhi", lat: 28.5244, lng: 77.2090 },
    { id: 3, name: "Store 3", area: "Noida Sector 18", lat: 28.5706, lng: 77.3216 },
    { id: 4, name: "Store 4", area: "Gurugram Cyber Hub", lat: 28.4949, lng: 77.0895 },
  ],
  jaipur: [
    { id: 1, name: "Store 1", area: "MI Road, Jaipur", lat: 26.9124, lng: 75.7873 },
    { id: 2, name: "Store 2", area: "Malviya Nagar, Jaipur", lat: 26.8544, lng: 75.8078 },
    { id: 3, name: "Store 3", area: "Vaishali Nagar, Jaipur", lat: 26.9200, lng: 75.7386 },
    { id: 4, name: "Store 4", area: "Mansarovar, Jaipur", lat: 26.8467, lng: 75.7526 },
  ],
  mumbai: [
    { id: 1, name: "Store 1", area: "Bandra West, Mumbai", lat: 19.0596, lng: 72.8295 },
    { id: 2, name: "Store 2", area: "Andheri East, Mumbai", lat: 19.1136, lng: 72.8697 },
    { id: 3, name: "Store 3", area: "Powai, Mumbai", lat: 19.1176, lng: 72.9060 },
    { id: 4, name: "Store 4", area: "Thane West, Mumbai", lat: 19.2183, lng: 72.9781 },
  ],
  bangalore: [
    { id: 1, name: "Store 1", area: "Indiranagar, Bangalore", lat: 12.9784, lng: 77.6408 },
    { id: 2, name: "Store 2", area: "Koramangala, Bangalore", lat: 12.9352, lng: 77.6245 },
    { id: 3, name: "Store 3", area: "Whitefield, Bangalore", lat: 12.9698, lng: 77.7499 },
    { id: 4, name: "Store 4", area: "Jayanagar, Bangalore", lat: 12.9308, lng: 77.5838 },
  ],
  hyderabad: [
    { id: 1, name: "Store 1", area: "Banjara Hills, Hyderabad", lat: 17.4156, lng: 78.4347 },
    { id: 2, name: "Store 2", area: "Madhapur, Hyderabad", lat: 17.4483, lng: 78.3915 },
    { id: 3, name: "Store 3", area: "Kukatpally, Hyderabad", lat: 17.4849, lng: 78.3996 },
    { id: 4, name: "Store 4", area: "Secunderabad, Hyderabad", lat: 17.4399, lng: 78.4983 },
  ],
  chennai: [
    { id: 1, name: "Store 1", area: "T. Nagar, Chennai", lat: 13.0418, lng: 80.2341 },
    { id: 2, name: "Store 2", area: "Anna Nagar, Chennai", lat: 13.0850, lng: 80.2101 },
    { id: 3, name: "Store 3", area: "Velachery, Chennai", lat: 12.9815, lng: 80.2180 },
    { id: 4, name: "Store 4", area: "Adyar, Chennai", lat: 13.0012, lng: 80.2565 },
  ],
};

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c * 10) / 10;
};

const MapUpdater = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1 });
  }, [center, zoom, map]);
  return null;
};

const FindMyStoreSection = ({ locale = 'en' }: FindMyStoreSectionProps) => {
  const t = translations[locale];
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [stores, setStores] = useState<Store[]>([]);
  const [activeStoreId, setActiveStoreId] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [mapCenter, setMapCenter] = useState<[number, number]>([28.6139, 77.2090]);
  const [mapZoom, setMapZoom] = useState(11);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setMapCenter([latitude, longitude]);
          setMapZoom(12);
          const nearestCityStores = storesByCity.delhi;
          const storesWithDistance = nearestCityStores.map(store => ({
            ...store,
            distance: calculateDistance(latitude, longitude, store.lat, store.lng)
          })).sort((a, b) => a.distance - b.distance);
          setStores(storesWithDistance);
        },
        (error) => {
          console.error("Error getting location:", error);
          const defaultStores = storesByCity.delhi.map((store, index) => ({
            ...store,
            distance: 3.4 + index * 3
          }));
          setStores(defaultStores);
        }
      );
    }
  };

  useEffect(() => {
    const defaultStores = storesByCity.delhi.map((store, index) => ({
      ...store,
      distance: 3.4 + index * 3
    }));
    setStores(defaultStores);
  }, []);

  const handleSearch = () => {
    const query = searchValue.toLowerCase().trim();
    const matchedCity = Object.keys(storesByCity).find(city => query.includes(city));

    if (matchedCity) {
      const cityStores = storesByCity[matchedCity].map((store, index) => ({
        ...store,
        distance: 1.2 + index * 2.5
      }));
      setStores(cityStores);
      setMapCenter([cityStores[0].lat, cityStores[0].lng]);
      setMapZoom(13);
      setActiveStoreId(null);
    } else {
      getUserLocation();
    }
  };

  const handleViewOnMap = (store: Store) => {
    setActiveStoreId(store.id);
    setMapCenter([store.lat, store.lng]);
    setMapZoom(15);
  };

  const activeIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
  });

  const defaultIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
  });

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#0E072F' }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-3xl md:text-5xl font-bold font-poppins mb-4">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #C0FF3A 20%, #00B2FF 50%)' }}
          >
            {t.title1} {t.title2}
          </span>
        </h2>

        <p className="text-center text-white/90 font-poppins font-medium text-base md:text-lg mb-8 md:mb-12">
          {t.subtitle}
        </p>

        <div className="flex justify-center mb-10 md:mb-14">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder={t.placeholder}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full h-12 pl-5 pr-14 rounded-full bg-white text-gray-800 font-poppins text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <div
            className="rounded-2xl p-4 md:p-6 relative w-full lg:w-[35%] shrink-0 z-10"
            style={{ backgroundColor: '#C9DF8F' }}
          >
            <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className={`mb-4 last:mb-0 p-4 rounded-xl transition-all ${
                    activeStoreId === store.id ? 'bg-white/50 ring-2 ring-gray-800' : 'bg-transparent'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-poppins font-bold text-gray-900 text-lg">
                        {t.store} {store.id}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4 text-gray-700" />
                        <span className="font-poppins text-sm text-gray-700">{store.area}</span>
                      </div>
                      <button
                        onClick={() => handleViewOnMap(store)}
                        className="mt-3 px-4 py-1.5 rounded-full bg-gray-900 text-white font-poppins text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors"
                      >
                        {t.viewOnMap}
                      </button>
                    </div>
                    <div className="font-poppins font-bold text-gray-900 text-base md:text-lg">
                      {store.distance} {t.km}
                    </div>
                  </div>
                </div>
              ))}
            </div>
              <div className="absolute right-2 top-6 bottom-6 w-1 bg-gray-900/20 rounded-full" />  
            </div>

          <div className="relative w-full lg:flex-1">
            <img
              src={bgGradient}
              alt=""
              aria-hidden="true"
              className="absolute top-1/2 w-[140%] h-[140%] object-contain pointer-events-none z-0 opacity-70"
              style={{ left: '5%', transform: 'translateY(-50%)' }}
            />
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-cyan-400/40" style={{ minHeight: '420px' }}>
              <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapUpdater center={mapCenter} zoom={mapZoom} />
                {userLocation && (
                  <Marker position={[userLocation.lat, userLocation.lng]}>
                    <Popup>Your Location</Popup>
                  </Marker>
                )}
                {stores.map((store) => (
                  <Marker
                    key={store.id}
                    position={[store.lat, store.lng]}
                    icon={activeStoreId === store.id ? activeIcon : defaultIcon}
                    eventHandlers={{ click: () => setActiveStoreId(store.id) }}
                  >
                    <Popup>
                      <div className="font-poppins">
                        <strong>{store.name}</strong><br />{store.area}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.5); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.8); }
`}</style>
    </section>
  );
};

export default FindMyStoreSection;