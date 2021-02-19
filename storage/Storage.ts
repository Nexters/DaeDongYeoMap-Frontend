import { findIndex } from '~/util/Array';
import type { SpotView } from '~/components/Course/Editor/EditorState';
import type { CourseView } from '~/components/Course/History/HistoryState';

const SPOTS_KEY = 'dedong_spots';
const COURSES_KEY = 'dedong_courses';

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

  public getCourses(): CourseView[] {
    const coursesStorageItem: string = localStorage.getItem(COURSES_KEY);
    const courses: CourseView[] = coursesStorageItem
      ? JSON.parse(coursesStorageItem)
      : [];

    return courses;
  }

  public addCourse(course: CourseView): void {
    const courses: CourseView[] = this.getCourses();
    const courseIdx: number = findIndex<CourseView>(courses, ({ id }) => {
      return id === course.id;
    });

    if (courseIdx === -1) {
      courses.push(course);
      localStorage.setItem(COURSES_KEY, JSON.stringify(courses));
    }
  }
}

const storage: Storage = new Storage();

export default storage;
