import { Skeleton } from "../ui/suspense"

const HeroSuspense = () => {
    return (
        <section className="section py-20">
            <div className="px-4 sm:px-0 flex gap-2 flex-col">
                <div>
                    <Skeleton className="h-[180px] w-full" />
                </div>
                <Skeleton className="h-[20px] w-[90%]" />
                <Skeleton className="h-[20px] w-[70%]" />
                <Skeleton className="h-[20px] w-[80%]" />
                <Skeleton className="h-[20px] w-[60%]" />
                <Skeleton className="h-[48px] w-[160px] mt-2" />
            </div>

        </section>
    )
}

export default HeroSuspense
