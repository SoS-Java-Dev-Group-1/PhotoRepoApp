import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import PhotoStore from "../../app/stores/photoStore";
import { Segment } from "semantic-ui-react";

const GalleryMain: React.FC = () => {
  const photoStore = useContext(PhotoStore);
  // This is a react hook that's essentially composed of three different states (willUnmount, didMount, and StatusChange)
  // Using this hook allows us to make the async call in our PhotoStore to load our photos
  // -- effectively this allows us to monitor changes in our current state, rerendering anytime there is a change
  useEffect(() => { 
    photoStore.loadPhotos();
  }, [photoStore]);

  // if our photos haven't loaded from API yet, display a loading page
  if (photoStore.isLoading)
    return <h1>Loading Photos...</h1>

  const { photosList } = photoStore; // deconstruct our photosList from our photoStore 

  //Render the completed page, iterating over each Photo in our photosList
  return (
    <div>
      <h1>Gallery main goes here</h1>
      {photosList.map((photo) => ( //Iterate through our photosList and create our images
          <Segment>
              <img key={photo.id} src={photo.url}/>
          </Segment>
      ))}
    </div>
  );
};

export default observer(GalleryMain); // This observer wrapper allows our component to view any changes to "observable" variables in our state
