import { findIndex } from '~/util/Array';
import type { SpotView } from '~/components/Course/Editor/EditorState';

const SPOTS_KEY = 'dedong_spots';
const CURRENT_POSITION_KEY = 'daedong_current_pos';

type CurrentPosition = { lngX: number; latY: number };

class Storage {
  public getSpots(): SpotView[] {
    const spotsStorageItem: string = localStorage.getItem(SPOTS_KEY);
    const spots: SpotView[] = spotsStorageItem
      ? JSON.parse(spotsStorageItem)
      : [];

    return spots;
  }

  public getCourses(): any {
    return {};
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
      localStorage.setItem(SPOTS_KEY, JSON.stringify(spots));
    }

    return spots;
  }

  public getCurrentPosition(): CurrentPosition {
    const posStorageItem: string = localStorage.getItem(CURRENT_POSITION_KEY);
    const position: CurrentPosition = posStorageItem
      ? JSON.parse(posStorageItem)
      : {
          lngX: 127.0671244,
          latY: 37.2968082,
        };

    return position;
  }

  public setCurrentPosition(position: CurrentPosition): void {
    localStorage.setItem(CURRENT_POSITION_KEY, JSON.stringify(position));
  }
}

const storage: Storage = new Storage();

export default storage;
