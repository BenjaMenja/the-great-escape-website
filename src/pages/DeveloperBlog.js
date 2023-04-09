import WeeklyReport from "../components/DeveloperBlog/weeklyreport";

function DeveloperBlog() {
    return(
        <div>
            <WeeklyReport dates={'2023-4-2 - 2023-4-8'} techentries={[
                'Game Over screen',
                'Visual player detection AI',
                'Reticle',
                'AI patrolling',
                'Pickup object physics',
                'Highlights based on player camera',
                'Microwave and Diffuser'
            ]} artentries={[
                'Microwave and Fridge fully rigged',
                'Modeling and UV maps of static assets'
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
            <WeeklyReport dates={'2023-3-19 - 2023-3-25'} techentries={[
                'Character Movement',
                'Added initial art assets'
            ]} artentries={[
                'Greybox'
            ]}/>
        </div>
    )
}

export default DeveloperBlog