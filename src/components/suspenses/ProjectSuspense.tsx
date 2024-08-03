import { Skeleton } from "../ui/suspense"

const ProjectSuspense = () => {
    return (
        <>
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[280px] w-full rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-8 w-[90%]" />
                    <Skeleton className="h-4 w-[80%]" />
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[280px] w-full rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-8 w-[90%]" />
                    <Skeleton className="h-4 w-[80%]" />
                </div>
            </div>
        </>
    )
}

export default ProjectSuspense
