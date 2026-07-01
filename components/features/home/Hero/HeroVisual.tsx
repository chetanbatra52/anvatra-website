import Card from "@/components/ui/Card";
import TechnologyNode from "@/components/ui/TechnologyNode";

export default function HeroVisual() {
  return (
    <Card className="relative min-h-[520px] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative flex h-full items-center justify-center">

        <div className="grid grid-cols-3 gap-6">

          <TechnologyNode
  title="Azure"
  className="bg-white border-slate-200 text-slate-900"
/>

         <TechnologyNode
  title="Artificial Intelligence"
  className="bg-emerald-50 border-emerald-100 text-slate-900"
/>

          <TechnologyNode title="Data Engineering" 
           className="bg-violet-50 border-violet-100 text-slate-900"/>

         <TechnologyNode
  title="Cloud"
  className="bg-cyan-50 border-cyan-100 text-slate-900"
/>

          <TechnologyNode
  title="ANVATRA"
  className="bg-slate-900 border-slate-900 text-white shadow-2xl scale-105"
/>

        <TechnologyNode
        title="Analytics"
        className="bg-violet-50 border-violet-100 text-slate-900"
        />

          <TechnologyNode title="Microsoft"
           className="bg-violet-50 border-violet-100 text-slate-900" />

          <TechnologyNode
            title="Technology"
            className="bg-slate-100"
          />

          <TechnologyNode
            title="Solutions"
            className="bg-slate-100"
          />

        </div>

      </div>

    </Card>
  );
}