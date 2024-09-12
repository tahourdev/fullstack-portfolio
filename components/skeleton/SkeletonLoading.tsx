import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLoading() {
    // Define the number of skeleton items you want to render
    const skeletonCount = 4;

    return (
        <div className="container-grid mt-12">
            {Array.from({ length: skeletonCount }).map((_, index) => (
                <div key={index} className='space-y-6'>
                    <div key={index} className='space-y-6'>
                        <Skeleton className="aspect-[6/4] rounded-t-md" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
