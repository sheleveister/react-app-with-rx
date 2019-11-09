import { merge, Observable, Subject, combineLatest } from "rxjs";
import { startWith, switchMap, mergeAll, concat } from "rxjs/operators";

import { ITrack, TTrackToAdd } from "../models/track";
import { trackService } from "../services/track.service";

interface TracksViewModel {
  tracks$: Observable<ITrack[]>;
  addTrack: (track: TTrackToAdd) => void;
  saveEffects$: Observable<unknown>;
}

export const createTracksViewModel = (): TracksViewModel => {
  const tracksSaveHandler$ = new Subject<TTrackToAdd>();
  const tracksSaveEffects$ = tracksSaveHandler$.pipe(
    switchMap((track: TTrackToAdd) =>  trackService.post(track)),
    // error handler
    // tap(() => setIsVisible(false)),
  );

  const tracks$ = tracksSaveEffects$.pipe(
    startWith(null),
    switchMap(() => trackService.get()),
  );

  const addTrack = (track: TTrackToAdd) => {
    tracksSaveHandler$.next(track);
  }

  const mergedEffects$ = combineLatest([
    tracksSaveEffects$,
  ]);

  return {
    tracks$,
    addTrack,
    saveEffects$: mergedEffects$,
  }
}
