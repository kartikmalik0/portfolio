import { Skeleton } from "../ui/suspense"

const AboutSuspense = () => {
    return (
        <div className=" mt-8 md:mt-0 space-y-2">
            <Skeleton className="h-[100px] w-full" />
            <Skeleton className="h-[100px] w-full" />
            <Skeleton className="h-[100px] w-full" />
        </div>
    )
}

export default AboutSuspense

