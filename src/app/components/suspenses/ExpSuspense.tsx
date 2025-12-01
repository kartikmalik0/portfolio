import { Skeleton } from "../ui/suspense"

const ExpSuspense = () => {
    return (
        <div className="space-y-2">
            <Skeleton className="h-[250px] w-full" />
            <Skeleton className="h-[50px] w-[80%]" />
        </div>
    )
}

export default ExpSuspense
