import { Skeleton } from "../ui/suspense"

const ContactSuspense = () => {
  return (
    <div className="flex w-full gap-2 items-center flex-col justify-center">
      {/* <Skeleton className="h-5 w-[60px]"/> */}
      <Skeleton className="h-12 w-[50%]"/>
      <Skeleton className="h-8 w-[40%]"/>
    </div>
  )
}

export default ContactSuspense
