import { useRouteLoaderData } from "react-router";
import SettingGrid from "../../Componets/Dashboard/settingGrid";
import SettingsForm from "../../Componets/Dashboard/settingsForm";
export default function Settings() {
  const { profile } = useRouteLoaderData("profile");
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
