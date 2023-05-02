import WeeklyReport from "../components/DeveloperBlog/weeklyreport";

function DeveloperBlog() {
    return(
        <div>
            <WeeklyReport dates={'2023-4-30 - 2023-5-6'} teamentries={[
                'First beta build finished',
                'Beta Presentation'
            ]} techentries={[
                'Sounds for animations',
                'Animations for AI controlled characters',
                'Credits screen',
                'Fridge door opening fixed',
                'More hint implementation (Essential oil poster)'
            ]} artentries={[
                'More clutter objects (Fridge items, paintings, etc.)',
                'Cloth simulation'
            ]}/>
            <WeeklyReport dates={'2023-4-23 - 2023-4-29'} techentries={[
                'Lots of bug fixing',
                'More realistic UI',
                'AI Sound detection',
                'Better hint implementation',
                'Options menu',
                'Optimized interactions to only use the E key',
                'Increased small object hitbox sizes'
            ]} artentries={[
                'Environment and Character textures',
                'Revamped mom model',
                'Placed objects near the front door',
                'More clutter objects',
                'Changed font for menus',
                'Dad model implemented',
                'More particle effects (Fridge mist, etc.)',
                'Many more sound effects (Microwave, Pickups, etc.)'
            ]}>

            </WeeklyReport>
            <WeeklyReport dates={'2023-4-16 - 2023-4-22'} teamentries={[
                'Playtest build completed',
                'Playtesting sessions begun'
            ]} techentries={[
                'Implementing Animations for characters and placed objects',
                'Added sound effects',
                'Improved menus',
                'Temp fixed held item socket',
                'Clutter and food items'
            ]} artentries={[
                'Improved static assets',
                'Animations for characters',
                'TV Video',
                'Assets for filler items'
            ]}/>
            <WeeklyReport dates={'2023-4-9 - 2023-4-15'} teamentries={[
                'Final alpha build completed',
                'Playtest build started',
                'Alpha Presentation'
            ]} techentries={[
                'Highlight improvements',
                'Pathfinding improvements',
                'Controls Menu',
                'All doors openable',
                'Hint implementation started'
            ]} artentries={[
                'Beds modeled and UV\'d',
                'Microwave and Fridge improvements'
            ]}/>
            <WeeklyReport dates={'2023-4-2 - 2023-4-8'} teamentries= {[
               'First Alpha build completed'
            ]} techentries={[
                'Game Over screen',
                'Win screen',
                'Game Over conditions',
                'Options Menu',
                'Visual player detection AI',
                'Reticle',
                'AI patrolling',
                'Pickup object physics',
                'Highlights based on player camera',
                'Microwave and Diffuser',
                'Mom, Aunt, and Dad player detection finished',
                'Sound effects implemented'
            ]} artentries={[
                'Microwave and Fridge fully rigged',
                'Player, Mom, and Aunt modeled',
                'Modeling and UV maps of static assets',
                'Models for Key, Burrito, and Essential Oil Items',
                'Map arrangement updates'
            ]}/>
            <WeeklyReport dates={'2023-3-26 - 2023-4-1'} techentries={[
                'Character Movement',
                'Pickup Objects',
                'Interactable Objects',
                'Highlights for pickup objects',
                'Opening and Closing Door',
                'Main Menu Screen',
                'Dialogue Box',
                'Held Item Interactions with placed objects'
            ]} artentries={[
                'Houdini procedural assets for counter and shelves'
            ]}/>
            <WeeklyReport dates={'2023-3-19 - 2023-3-25'} teamentries={[
                'Project Initialization'
            ]} techentries={[
                'Character Movement',
                'Added initial art assets'
            ]} artentries={[
                'Greybox'
            ]}/>
        </div>
    )
}

export default DeveloperBlog