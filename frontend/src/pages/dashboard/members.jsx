import MemberCard from "../../Componets/Dashboard/members/memberCard";

export default function Members() {
  return (
    <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </section>
  );
}
