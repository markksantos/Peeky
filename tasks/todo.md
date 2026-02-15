# Grid View Sort Controls

## Changes
- [x] Add sort state properties (`sortField`, `sortAscending`) to `FolderGridView`
- [x] Add sort bar UI components (`NSPopUpButton`, `NSButton`, `NSStackView`)
- [x] Build sort bar in `setupUI()` between header and collection view
- [x] Add `sortFieldChanged(_:)` and `sortDirectionToggled(_:)` action methods
- [x] Add `applySortAndReload()` with full sort logic matching list view
- [x] Update `loadContents()` to use `applySortAndReload()` instead of hardcoded name sort

## File Modified
- `QuickLookProApp/Quick Look Preview Extension/FolderGridView.swift`

## Verification
- [ ] Build in Xcode (both targets compile)
- [ ] `qlmanage -r` to reset QL cache
- [ ] Test with `qlmanage -p` on a folder — sort bar visible
- [ ] Change sort field — items reorder correctly
- [ ] Toggle ascending/descending — order reverses
- [ ] Thumbnails still display correctly after sort changes
