import packages from "@/public/packages/package.json"

export default function Packages(){
    return(
        <section>
           {packages.map((package)) => (
            <div key={pack}></div>
           ) : ()}
        </section>
    )
}