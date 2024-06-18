import type { NextPage } from 'next'

// import NewPost from '@components/Composer/Post/New'
// import ExploreFeed from '@components/Explore/Feed'
// import { Leafwatch } from '@helpers/leafwatch'
// import { HomeFeedType } from '@hey/data/enums'
// import { PAGEVIEW } from '@hey/data/tracking'
// import { GridItemEight, GridItemFour, GridLayout } from '@hey/ui'
// import { useEffect, useState } from 'react'
// import { useProfileStore } from 'src/store/persisted/useProfileStore'

// import FeedType from './FeedType'
// import ForYou from './ForYou'
// import PaidActions from './PaidActions'
// import Sidebar from './Sidebar'
// import Timeline from './Timeline'
import Hero from './Hero'

const Home: NextPage = () => {
  // const { currentProfile } = useProfileStore()
  // const [feedType, setFeedType] = useState<HomeFeedType>(HomeFeedType.FOLLOWING)

  // useEffect(() => {
  //   Leafwatch.track(PAGEVIEW, { page: 'home' })
  // }, [])

  // const loggedInWithProfile = Boolean(currentProfile)
  const loggedInWithProfile = false

  return (
    <>
      {!loggedInWithProfile && <Hero />}
      {/* <GridLayout>
        <GridItemEight className='space-y-5'>
          {loggedInWithProfile ? (
            <>
              <NewPost />
              <FeedType feedType={feedType} setFeedType={setFeedType} />
              {feedType === HomeFeedType.FOLLOWING ? (
                <Timeline />
              ) : feedType === HomeFeedType.FORYOU ? (
                <ForYou />
              ) : feedType === HomeFeedType.PREMIUM ? (
                <PaidActions />
              ) : null}
            </>
          ) : (
            <ExploreFeed />
          )}
        </GridItemEight>
        <GridItemFour>
          <Sidebar />
        </GridItemFour>
      </GridLayout> */}
    </>
  )
}

export default Home
