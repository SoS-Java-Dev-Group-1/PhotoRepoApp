import { observable, action, computed, runInAction } from "mobx";
import { createContext } from "react";
import { IPhoto } from "../models/photo";
import agent from "../api/agent";

class PhotoStore {
  // Make these variables observable so our observers (our components) will rerender any time a change is made to our state
  @observable photos: IPhoto[] = [];
  @observable isLoading = false;

  // This 'computed' property allows us to fetch our list of photos in their current state
  @computed get photosList() {
    return this.photos;
  }

  @action loadPhotos = async () => {
    this.isLoading = true; // Set our loading to be true, this will cause our GalleryMain to wait on a loading screen before rendering a list of images (this is to avoid null pointer exceptions)
    try {
      this.photos = await agent.Photos.fetchAll();
      this.isLoading = false;
    } catch (err) {
      runInAction("load photos error", () => {
        // The reason we have to use this "runInAction" wrapper is because we're modifying our state again -- and this acts as different way of saying our .then() statement in vanilla js
        console.log(err);
        this.isLoading = false;
      });
    }
  };
}

export default createContext(new PhotoStore());
