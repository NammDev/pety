import type { ChangeEvent, FC, MutableRefObject } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

interface SearchProps {
  placeholder?: string
}

const Search: FC<SearchProps> = ({ placeholder = 'Search…' }) => {
  return (
    <div className='w-full'>
      <form>
        <Input
          className='px-3 py-2 text-sm'
          iconLeft={<MagnifyingGlassIcon />}
          iconRight={<XMarkIcon className={cn('cursor-pointer, invisible')} />}
          placeholder={placeholder}
          type='text'
        />
      </form>
    </div>
  )
}

export default Search
