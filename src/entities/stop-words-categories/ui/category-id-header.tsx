// import { useStopCategorySingle } from '@/entities/stop-words-categories/lib/hooks/use-stop-category-single.ts'
// import { useRouter } from '@tanstack/react-router'
// import { ArrowLeft } from 'lucide-react'
// import { Typography } from '@/shared/ui/typography'
//
// const CategoryIdHeader = ({ categoryId }: CategoryIdProps) => {
//   const { category } = useStopCategorySingle(Number(categoryId))
//   const { history } = useRouter()
//
//   return (
//     <div className="relative flex h-15 items-center gap-4 px-4 py-2">
//       <button
//         type="button"
//         className="flex items-center"
//         onClick={() => history.back()}
//       >
//         <ArrowLeft />
//         <Typography variant="body">Назад</Typography>
//       </button>
//       <Typography variant="h2">{category?.title}</Typography>
//     </div>
//   )
// }
