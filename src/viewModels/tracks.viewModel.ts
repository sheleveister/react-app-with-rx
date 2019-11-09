import { combineLatest, Observable, Subject } from "rxjs";
import { startWith, switchMap, tap } from "rxjs/operators";

import { ITrack, RawItem } from "../models/track";
import { trackService } from "../services/track.service";

import { trackModalViewModel } from "./trackModal.viewModel";

interface TracksViewModel {
  tracks$: Observable<ITrack[]>;
  addTrack: (track: RawItem<ITrack>) => void;
  saveEffects$: Observable<unknown>;
}

export const createTracksViewModel = (): TracksViewModel => {
  const tracksSaveHandler$ = new Subject<RawItem<ITrack>>();
  const tracksSaveEffects$ = tracksSaveHandler$.pipe(
    tap(() => trackModalViewModel.setIsPending(true)),
    switchMap((track: RawItem<ITrack>) =>  trackService.post(track)),
    tap(() => trackModalViewModel.setIsPending(false)),
    // @TODO error handler
    tap(() => trackModalViewModel.toggleModal(false)),
    

  );

  const tracks$ = tracksSaveEffects$.pipe(
    startWith(null),
    switchMap(() => trackService.get()),
  );

  const addTrack = (track: RawItem<ITrack>) => {
    tracksSaveHandler$.next(track);
  }

  const mergedEffects$ = combineLatest([
    tracksSaveEffects$,
  ]);

  return {
    tracks$,
    saveEffects$: mergedEffects$,
    addTrack,
  }
}

export const tracksViewModel = createTracksViewModel();
