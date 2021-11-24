import BucketList from "./BucketList";

const BucketListDisplay = ({bucketList, removeFromBucketList}) => {

    const bLComponents = bucketList.map(bucketList => {

        return(
            <BucketList bucketList={bucketList} removeFromBucketList={removeFromBucketList}/>
        )
    })



    return (
        <div>
           {bLComponents} 
        </div>
    )
}

export default BucketListDisplay;