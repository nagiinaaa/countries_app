import BucketList from "./BucketList";

const BucketListDisplay = ({bucketList, removeFromBucketList}) => {

    const bLComponents = bucketList.map(bucketList => {

        return(
            <BucketList bucketList={bucketList} key={bucketList.ccn3} removeFromBucketList={removeFromBucketList}/>
        )
    })



    return (
        <div className="CountriesList">
           {bLComponents} 
        </div>
    )
}

export default BucketListDisplay;