import { findIndex } from '~/util/Array';
import type { SpotView } from '~/components/Course/Editor/EditorState';

const SPOTS_KEY = 'dedong_spots';

class Storage {
  public getSpots(): SpotView[] {
    const spotsStorageItem: string = localStorage.getItem(SPOTS_KEY);
    const spots: SpotView[] = spotsStorageItem
      ? JSON.parse(spotsStorageItem)
      : [];

    return spots;
  }

  public addSpot(spot: SpotView): SpotView[] {
    const spots: SpotView[] = this.getSpots();
    const spotIndex: number = findIndex<SpotView>(spots, (item) => {
      return item.id === spot.id;
    });

    if (spotIndex === -1) {
      spots.push(spot);
      localStorage.setItem(SPOTS_KEY, JSON.stringify(spots));
    }

    return spots;
  }

  public removeSpot(spotId: string): SpotView[] {
    const spots: SpotView[] = this.getSpots();
    const spotIndex: number = findIndex<SpotView>(spots, (item) => {
      return item.id === spotId;
    });

    if (spotIndex !== -1) {
      spots.splice(spotIndex, 1);
      console.log(spots);
      localStorage.setItem(SPOTS_KEY, JSON.stringify(spots));
    }

    return spots;
  }
}

const storage: Storage = new Storage();

export default storage;
