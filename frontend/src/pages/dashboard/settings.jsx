import { useRouteLoaderData } from "react-router";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import SettingGrid from "../../Componets/Dashboard/settingGrid";
import SettingsForm from "../../Componets/Dashboard/settingsForm";

export default function Settings() {
  const { profile } = useRouteLoaderData("profile");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin text-blue-500 h-10 w-10" />
      </div>
    );
  }

  return (
    <SettingGrid profile={profile}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-2xl">Edit Details</h1>
        <div className="mx-auto w-full max-w-[550px]">
          <SettingsForm />
        </div>
      </div>
    </SettingGrid>
  );
}
