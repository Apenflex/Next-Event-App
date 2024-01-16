import { IEvent } from '@/lib/database/models/event.model'
import { Button } from '../ui/button'

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const onCheckout = async () => {
    console.log('checkout')
  }
  return (
    <form
      action={onCheckout}
      method="post"
    >
      <Button type='submit' role='link' size='lg' className='button sm:w-fit'>
        {event.isFree ? 'Get Ticket' : 'Buy Ticket'}
      </Button>
    </form>
  )
}

export default Checkout
