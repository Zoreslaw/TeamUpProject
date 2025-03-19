import React from 'react';
import { StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function ChatCardPlaceholder() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item style={styles.container}>
        {/* Avatar placeholder */}
        <SkeletonPlaceholder.Item width={56} height={56} borderRadius={28} />
        {/* Spacing */}
        <SkeletonPlaceholder.Item marginLeft={14}>
          {/* Name placeholder */}
          <SkeletonPlaceholder.Item width={120} height={14} borderRadius={4} />
          {/* Last message placeholder */}
          <SkeletonPlaceholder.Item marginTop={6} width={180} height={12} borderRadius={4} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
