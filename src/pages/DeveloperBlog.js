import WeeklyReport from "../components/DeveloperBlog/weeklyreport";

function DeveloperBlog() {
    return(
        <div>
            <WeeklyReport dates={'2023-4-16 - 2023-4-22'} teamentries={[
                'Playtest build completed'
            ]} techentries={[
                'Implementing Animations for characters and placed objects',
                'Added sound effects',
                'Improved menus',
                'Fixed held item socket'
            ]} artentries={[
                'Improved static assets',
                'Animations for characters',
                'TV Video'
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